import { Observable } from "rxjs";
import { IAuthor } from "../Domains/DbModel/IAuthor";
import { ICourse } from "../Domains/DbModel/ICourse";
export interface IDummyData {

    AuthorList(): Observable<IAuthor>;
    CourseList(): Observable<ICourse>;


    CreateAuthor(author: IAuthor): Observable<IAuthor>;
    CreateCourse(course: ICourse): Observable<ICourse>;

    EditAuthor(author: IAuthor): Observable<IAuthor>;
    EditCourse(course: ICourse): Observable<ICourse>
    
    DeleteAuthor(author: IAuthor): Observable<IAuthor>;
    DeleteCourse(course: ICourse): Observable<ICourse>;
}