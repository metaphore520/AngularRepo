import { Injectable } from '@angular/core';
import {
  delay, from, interval, map, Observable,
  of, takeWhile, tap, throttle, throttleTime, timer
} from 'rxjs';
import { IAuthor } from '../../Domains/DbModel/IAuthor';
import { ICourse } from '../../Domains/DbModel/ICourse';
import { IDummyData } from '../../Contracts/IDummyData';

@Injectable({
  providedIn: 'root'
})
export class DummyDataService implements IDummyData {
  authorList: IAuthor[] = [
    {
      Id: 1,
      Name: 'Rahat'
    },
    {
      Id: 2,
      Name: 'Jamal'
    }, {
      Id: 3,
      Name: 'Kamal'
    }, {
      Id: 4,
      Name: 'Shahid'
    }, {
      Id: 5,
      Name: 'Hablu'
    }, {
      Id: 6,
      Name: 'Kablu'
    }, {
      Id: 7,
      Name: 'Bablu'
    }, {
      Id: 8,
      Name: 'Dablu'
    }, {
      Id: 9,
      Name: 'Sajid'
    }, {
      Id: 10,
      Name: 'Javid'
    }, {
      Id: 11,
      Name: 'Lily'
    }, {
      Id: 12,
      Name: 'Majid'
    }, {
      Id: 13,
      Name: 'Sejuty'
    }, {
      Id: 14,
      Name: 'Jahir'
    }
  ];
  authorListLength: number = this.authorList.length;
  courseList: ICourse[] =
    [
      {
        Id: 1,
        Name: "Chemistry",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 1,
        Author: { Id: 1, Name: 'Rahat' }
      },
      {
        Id: 2,
        Name: "Chemistry-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 2,
        Author: {
          Id: 2,
          Name: 'Jamal'
        }
      },
      {
        Id: 3,
        Name: "Bangla-1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 3,
        Author: {
          Id: 3,
          Name: 'Kamal'
        }
      }, {
        Id: 4,
        Name: "Bangla-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 4,
        Author: {
          Id: 4,
          Name: 'Shahid'
        }
      }, {
        Id: 5,
        Name: "English-1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 5,
        Author: {
          Id: 5,
          Name: 'Hablu'
        }
      }, {
        Id: 6,
        Name: "English-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 6,
        Author: {
          Id: 6,
          Name: 'Kablu'
        }
      }, {
        Id: 7,
        Name: "Math-1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 7,
        Author: {
          Id: 7,
          Name: 'Bablu'
        }
      }, {
        Id: 8,
        Name: "Math-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 1,
        Author: {
          Id: 8,
          Name: 'Dablu'
        }
      }, {
        Id: 9,
        Name: "Sociology-1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 9,
        Author: {
          Id: 9,
          Name: 'Sajid'
        }
      }, {
        Id: 10,
        Name: "Sociology-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 10,
        Author: {
          Id: 10,
          Name: 'Javid'
        }
      }, {
        Id: 11,
        Name: "Statistics-1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 11,
        Author: {
          Id: 11,
          Name: 'Lily'
        }
      }, {
        Id: 12,
        Name: "Statistics-2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 12,
        Author: {
          Id: 12,
          Name: 'Majid'
        }
      }, {
        Id: 13,
        Name: "Higher Math 1",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 13,
        Author: {
          Id: 13,
          Name: 'Sejuty'
        }
      }, {
        Id: 14,
        Name: "Higher Math 2",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 14,
        Author: {
          Id: 14,
          Name: 'Jahir'
        }
      }, {
        Id: 15,
        Name: "Physics",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 14,
        Author: {
          Id: 14,
          Name: 'Jahir'
        }
      }, {
        Id: 16,
        Name: "Physics",
        Description: "This is new",
        FullPrice: 60,
        AuthorId: 14,
        Author: {
          Id: 14,
          Name: 'Jahir'
        },
      }
    ];
  courseListLength: number = this.courseList.length;
  constructor() { }

  AuthorList(): Observable<IAuthor> {
    return interval(400)
      .pipe(
        takeWhile(x => x < this.authorList.length),
        map(x => this.authorList[x])
      );
  }
  CourseList(): Observable<ICourse> {
    return interval(400)
      .pipe(
        takeWhile(x => x < this.courseList.length),
        map(x => this.courseList[x])
      );
  }


  CreateAuthor(author: IAuthor): Observable<IAuthor> {
    return from([author]).
      pipe(
        delay(3000),
        tap(x => 
          { 
            this.authorList.push(x); 
            x.Id = this.authorList.length;
          }),
        map(x => x)
      );
  }
  CreateCourse(course: ICourse): Observable<ICourse> {
    return from([course]).
      pipe(
        delay(3000),
        tap(x => 
          { 
            this.courseList.push(x);
            x.Id = this.courseList.length; 
          }),
        map(x => x)
      );
  }


  EditAuthor(author: IAuthor): Observable<IAuthor> {
    return from([author]).
      pipe(
        delay(3000),
        tap(x => {
          let _author = this.authorList.find(y => x.Id == y.Id) as IAuthor;
          _author.Name = x.Name;
          return _author;
        }),
        map(x => x)
      );
  }
  EditCourse(course: ICourse): Observable<ICourse> {
    return from([course])
      .pipe(
        delay(3000),
        tap(x => {
          let _course = this.courseList.find(y => x.Id == y.Id) as ICourse;
          _course.Name = x.Name;
          _course.Author = x.Author;
          _course.AuthorId = x.AuthorId;
          _course.Description = x.Description;
          _course.FullPrice = x.FullPrice;
          return _course;
        }),
        map(x => x)
      );

  }


  DeleteAuthor(author: IAuthor): Observable<IAuthor> {
    return from([author]).
      pipe(
        delay(3000),
        tap(x => {
          let index = this.authorList.findIndex(y => x.Id == y.Id);
          let result = this.authorList.splice(index, 1);
          return result;
        }),
        map(x => x)
      );

  }
  DeleteCourse(course: ICourse): Observable<ICourse> {
    return from([course])
      .pipe(
        delay(3000),
        tap(x => {
          let index = this.courseList.findIndex(y => x.Id == y.Id);
          let result = this.courseList.splice(index, 1);
          return result;
        }),
        map(x => x)
      );

  }

















}
