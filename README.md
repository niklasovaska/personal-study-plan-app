# Personal Study Plan App

As a front-end programming exercise, this personal study app is developed to account completed courses as well as add and schedule upcoming courses to plan studies for university degree program.

## Frameworks, libraries and tools used
- Axios 1.7.9
- Boxicons web icons
- JSON Server 1.0.0-beta.3
- React 18.3.1
- React Aria Components 1.5.0
- React Tooltip 5.28.0
- SweetAlert2 11.15.9

## Course data
Course data is stored in db.json file with key-value pairs demonstrated in the example below
```json
{
    "name": "Data Management and Databases",
    "module": "Professional Competencies in Business Information Technology Studies",
    "code": "SOF001AS2A",
    "credits": 5,
    "grade": 5,
    "status": "completed",
    "id": "4515"
}
```

## Back-end service
Fetching course data using back-end service courses.js comprising of Axios .get(), .post(), .put() and .delete() functions.

## Screenshots
### Header and completed courses view
Displaying total credits, progressbar and table of completed courses. Header displays completed and upcoming buttons to switch between views. Add course to render input form modal.  
<img width="693" alt="completedCourses" src="https://github.com/user-attachments/assets/d680de03-c0d2-4dd3-9b36-663551ce51d9" />


### Upcoming courses view
Displaying coursecards based on course object's status. On hover Coursecard displays mark complete and delete functionalities.  
<img width="876" alt="upcomingCourses" src="https://github.com/user-attachments/assets/e9bd7c2b-cedc-403b-9c43-ecba3bdd83a0" />

### Add course
<img width="911" alt="addCourseModal" src="https://github.com/user-attachments/assets/9ea00f09-0d3d-450e-abb4-cf544352332d" />


## React components

### App
```mermaid
graph
    subgraph App.jsx
        Module("? CompletedCourses : Upcoming Courses")
        subgraph Header
            Progressbar
        end
    end
```

### Upcoming courses components
```mermaid
graph LR
    subgraph UpcomingCourses.jsx
        subgraph SemesterColumn2
            CourseCardC
            CourseCardD
        end
        subgraph SemesterColumn1
            CourseCardA
            CourseCardB
        end
    end
```
### Add course
Add button to render AddCourseModal input form.

## Project status
- [x] CRUD functionalities with JSON Server
- [x] Views for completed and upcoming courses
- [ ] Draggable coursecards to schedule courses by semesters (drop areas)
- [ ] Converting db.json to a SQL/NoSQL database
- [ ] Deployment 
