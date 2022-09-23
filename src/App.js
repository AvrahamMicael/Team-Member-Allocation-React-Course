import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Employees from './Employees';
import Footer from './Footer';
import Header from './Header';
import Groups from './Groups';
import Nav from './Nav';
import NotFound from './NotFound';

const App = () => {

  const [ selectedTeam, setSelectedTeam ] = useState(localStorage.getItem('selectedTeam') || 'TeamA');

  const [ employees, setEmployees ] = useState(JSON.parse(localStorage.getItem('employees')) || [
    {
        id: 1,
        fullName: "Bob Jones",
        designation: "JavaScript Developer",
        gender: "male",
        teamName: "TeamA"
    },
    {
        id: 2,
        fullName: "Jill Bailey",
        designation: "Node Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 3,
        fullName: "Gail Shepherd",
        designation: "Java Developer",
        gender: "female",
        teamName: "TeamA"
    },
    {
        id: 4,
        fullName: "Sam Reynolds",
        designation: "React Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 5,
        fullName: "David Henry",
        designation: "DotNet Developer",
        gender: "male",
        teamName: "TeamB"
    },
    {
        id: 6,
        fullName: "Sarah Blake",
        designation: "SQL Server DBA",
        gender: "female",
        teamName: "TeamB"
    },
    {
        id: 7,
        fullName: "James Bennet",
        designation: "Angular Developer",
        gender: "male",
        teamName: "TeamC"
    },
    {
        id: 8,
        fullName: "Jessica Faye",
        designation: "API Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 9,
        fullName: "Lita Stone",
        designation: "C++ Developer",
        gender: "female",
        teamName: "TeamC"
    },
    {
        id: 10,
        fullName: "Daniel Young",
        designation: "Python Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 11,
        fullName: "Adrian Jacobs",
        designation: "Vue Developer",
        gender: "male",
        teamName: "TeamD"
    },
    {
        id: 12,
        fullName: "Devin Monroe",
        designation: "Graphic Designer",
        gender: "male",
        teamName: "TeamD"
    }
  ]);

  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [ employees ]);

  useEffect(() => {
    localStorage.setItem('selectedTeam', selectedTeam);
  }, [ selectedTeam ]);

  return (
    <BrowserRouter>
      <Nav/>
      <Header
        selectedTeam={ selectedTeam }
        teamSize={ employees.filter(employee => employee.teamName == selectedTeam).length }
      />
      <Routes>
        <Route
          path="/"
          element={
            <Employees
              employees={ employees }
              setEmployees={ setEmployees }
              selectedTeam={ selectedTeam }
              setSelectedTeam={ setSelectedTeam }
            />
          }
        />
        <Route
          path="/groups"
          element={
            <Groups
              employees={ employees }
              selectedTeam={ selectedTeam }
              setSelectedTeam={ setSelectedTeam }
            />
          }
        />
        <Route path='*' element={ <NotFound/> }/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
