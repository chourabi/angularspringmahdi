import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  title:String = 'my first app';
  arr:String[] = ['mars','avril','may'];
  isConnected = false;
  bgImage="../assets/1.jpg";

  red='red';

  myPara=' hello world <strong>chourabi taher</strong> ';

  txtButton='CLICK ME';
  count = 0;

  today = new Date();

  myTxt = "hello world";

  salary=2500;


  forminput = new FormGroup({
    email : new FormControl('',[Validators.required,Validators.email]),
    password : new FormControl('',Validators.required),
    confirmpassword : new FormControl('',Validators.required),
    
    
  });

  // big form

  employeeSigninForm = new FormGroup({
    fullname: new FormControl(),
    phone:new FormControl(),
    address: new FormGroup({
      codepostal: new FormControl(),
      rue:new FormControl(),
      town: new FormControl()
    })
  })

  w:Subscription;


  constructor(){
    console.log("constructor");
    
  }
  ngOnDestroy(): void {
    this.w.unsubscribe();
  }
  ngOnInit(): void {
    /*console.log("on init");
    
    setTimeout(() => {
      this.bgImage="../assets/2.jpg";
    }, 5000);



    this.callAsyncWork();

    this.w =this.watchPositionWithObservale().subscribe((data)=>{
      console.log(data);
      
    },(err)=>{
      console.log(err);
      
    })*/


  }


   async callAsyncWork(){
    /******************** promise ****************** */

    console.log("hello promise");
    
    /*this.doAsyncTask().then((data)=>{
      console.log("data1",data);
      
      /*
      this.doAsyncTask2().then((data2)=>{
        console.log("data2",data2);
        
      }).catch((e)=>{
        console.log(e);
        
      })
      

    }).then((data2)=>{
      console.log("then 2",data2);

      
    }).then(()=>{
      console.log("then 2");
      
    })
    
    .catch((e)=>{
      alert(e.message);
    })*/

    var retour  = await this.doAsyncTask(); 
    var retour2  = await this.doAsyncTask2(); 
    
    console.log(retour);
    console.log(retour2);
    

    console.log("promise done");
  }


  doAsyncTask(){
    var promise  = new Promise(( resolve,reject )=>{

      setTimeout(()=>{
        //resolve({ success:true, message:"resolved !" });
        resolve({ success:true, message:"resovled !" });
        
      },10000 )


    });

    return promise;
  }
  
  doAsyncTask2(){
    var promise  = new Promise(( resolve,reject )=>{

      setTimeout(()=>{
        //resolve({ success:true, message:"resolved !" });
        resolve({ success:true, message:"resovled !" });
        
      },10000 )


    });

    return promise;
  }
  


  getCurrentLocation(){

    let watchID:number;
    if (  navigator.geolocation  ) {
      console.log("geo location is avaivale");

      watchID = navigator.geolocation.watchPosition((position)=>{
        console.log(position);
        
      })

      
    }

  }


  /* observable  */

  watchPositionWithObservale(){
    let locations = new Observable((observer)=>{
      let watchID:number;
      if (  navigator.geolocation  ) {
        console.log("geo location is avaivale");

        watchID = navigator.geolocation.watchPosition((position)=>{
          observer.next(position);
          
        },(err)=>{
          observer.error({success:false,message:"error watch"});
        })

        
      }
    });


    return locations;
  }




  btnClick(){
    this.txtButton = 'CLICKED !';
    this.count++;
  }


  submit(){
    console.log(this.forminput);
    
    
  }

  checkForm(){
    const password = this.forminput.value.password;
    const cpassword = this.forminput.value.confirmpassword;
    
    if( this.forminput.valid  ){
      if ( password == cpassword ) {
        return false;
      }
    }

    return true;
  }


  check(){
    const value = this.employeeSigninForm.value;
    console.log(value);
    
  }






}
