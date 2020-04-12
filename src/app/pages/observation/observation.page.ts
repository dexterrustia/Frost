import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular'
import { Observable } from 'rxjs';
import { AppServService } from 'src/app/services/app-serv.service';
import { Storage } from '@ionic/storage'
import { Location } from '@angular/common';
import { DayObservationComponent } from '../../components/day-observation/day-observation.component'
@Component({
  selector: 'app-observation',
  templateUrl: './observation.page.html',
  styleUrls: ['./observation.page.scss'],
})
export class ObservationPage implements OnInit {

  _observations = [];
  _message: String = '';
  _selectedDay = [];
  _selectedIndex: String = ''
  _selectedDate: String = '' // Use to check current background highligh 
  _isTest: boolean = false;
  _testErrorLink: String = '';
  _testCheckAvailableTime: String = '';
  _background: String;

  sliderConfig = {
    slidesPerView: 1.5,
    spaceBetween: 10,
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
  };


  constructor(
    private serv: AppServService,
    private loadingCtrl: LoadingController,
    private storage: Storage,
    private location: Location
  ) {
    this.getObervations();
  }

  ngOnInit() {
  }

  getObervations = async () => {

    const loading = await this.loadingCtrl.create({
      message: "Getting informations...",
      spinner: 'bubbles'
    })

    let timeParam: String = ''
    let DestructureData = {};
    this.storage.get('myParam').then((val) => {
      const { startDay, isMultipleDays, endDay } = val.data;
      const id = val.id;
      timeParam = isMultipleDays ? `${startDay}/${endDay}` : startDay;
      console.log('Your timeParam is', timeParam);
      console.log('Your id is', id);

      loading.present()
      let senseSystem = this.serv.getObervations(timeParam, id)
        //let senseSystem = this.serv.getFakeDataForTesting() // test testing getting from fakedb
        .toPromise()
        .then(res => {
          console.log(`Original Response : `)
          console.dir(res)
          console.table(res.data)

          let dayObs = [];
          for (let i = 0, len = res.data.length; i < len; i += 6) {
            res.data[i].referenceTime
            //const item = {[res.data[i].referenceTime] : res.data[i].observations}
            dayObs.push(res.data[i].observations)
            if (dayObs.length == 24) {
              this._observations.push({
                date: [res.data[i].referenceTime].toString().slice(0, 10),
                observations: dayObs
              });
              dayObs = [];
            }
          }
          this.onDateSelec(0) // Set the first day as Default selectedDay
          console.log(this._observations)
          console.log('selectedDays :')
          console.dir(this._selectedDay)

          loading.dismiss()
        }).catch(err => {
          loading.dismiss()
          console.log(err)
          if (err.message)
            this._message = err.message
          if (err.error.error.reason)
            this._message = err.error.error.reason
          this._testErrorLink = `https://frost.met.no/observations/v0.jsonld?sources=${id}&referencetime=${timeParam}&elements=air_temperature%2Cwind_speed%2Cboolean_fair_weather(cloud_area_fraction%20P1D)`
          this._testCheckAvailableTime = `https://frost.met.no/observations/availableTimeSeries/v0.jsonld?sources=${id}`
          console.log(`this._message : ${this._message}`)

        });
    })

  }
  goBack = () => {
    this._message = '';
    this.location.back();
  }
  onDateSelec = (index: number) => {
    console.log(`index : ${index}`)
    this._selectedDay = this._observations[index].observations
    console.log(this._selectedDay)
    this._selectedIndex = index.toString();
    this._selectedDate = this._observations[index].date

    this._selectedDay = this._observations[index].observations;
    console.log(`this._selectedDay[0][2].value ${this._selectedDay[0][0].value}`)
    this._background = this._selectedDay[0][6].value == 0 ? 'rain' : 'sun' //Set background base on the first day
  }
}
