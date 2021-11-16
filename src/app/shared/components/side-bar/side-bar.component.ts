import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  mainMenu: {
    defaultOptions: Array<any>, accessLink: Array<any>
  } = { defaultOptions: [], accessLink: [] }
  
  customOptions: Array<any> = []

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.mainMenu.defaultOptions = [
      {
        name: 'Home',
        icon: 'uil uil-estate',
        router: ['/','auth']
      },
      {
        name: 'Search',
        icon: 'uil uil-search',
        router: ['/','history']
      },
      {
        name: 'Your Library',
        icon: 'uil uil-chart',
        router: ['/', 'favorites'],
        query: {hello: 'world'}
      },
    ]
    this.mainMenu.accessLink = [
      {
        name: 'Create Playlist',
        icon: 'uil-plus-square',
      },
      {
        name: 'Liked Songs',
        icon: 'uil-heart-medical',
      },
    ]
    this.customOptions = [
      {
        name: 'My playList',
        router: ['/']
      },{
        name: 'My PlayList',
        router: ['/']
      },
    ]
  }

  goTo($event: any): void {
    this.router.navigate(['/', 'favorites'], {
      queryParams: {
        key1: 'value1',
        key2: 'value2',
        key3: 'value3'
      }
    })
    console.log($event)
  }
}
