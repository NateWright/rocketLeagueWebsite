import { Component, OnInit } from '@angular/core';
import { TeamDbService } from '../team-db.service';
import { HttpClient } from '@angular/common/http'
import { environment } from 'src/environments/environment';

interface Event {
  regionalName: string,
  csvURL: string,
  format: string
}

@Component({
  selector: 'app-input-page',
  templateUrl: './input-page.component.html',
  styleUrls: ['./input-page.component.scss']
})
export class InputPageComponent implements OnInit {
  naEvents: Event[] = []
  euEvents: Event[] = [];
  constructor(private teamServer: TeamDbService, private http: HttpClient) {

    this.http
      .get<Event[]>(environment.dbURL + "brackets/RLCS2022-2023/naEvents.json")
      .subscribe((events: Event[]) => {
        this.naEvents = events;
      })
    this.http
      .get<Event[]>(environment.dbURL + "brackets/RLCS2022-2023/euEvents.json")
      .subscribe((events: Event[]) => {
        this.euEvents = events;
      })
  }

  ngOnInit(): void {
  }

  initiateTeams(file: string) {
    this.http.get(environment.dbURL + file, { responseType: 'text' })
      .subscribe((data) => {
        this.teamServer.initiateTeamsDb(data.split(' '))
      }
      );
  }

}
