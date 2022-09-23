import { useState } from 'react';

const Groups = ({ employees, selectedTeam, setSelectedTeam }) => {

    const groupTeamMembers = () => {
        const teams = employees.reduce((teams, employee) => {
            const teamName = employee.teamName || 'none';
            const teamAlreadyExists = teams.some(team => team.name == teamName);
            const team = teams.find(team => team.name == teamName) || { name: teamName, members: [], collapsed: selectedTeam != teamName };
            team.members.push(employee);
            if(!teamAlreadyExists) teams.push(team);
            return teams;
        }, []);

        return teams
            .sort((team, nextTeam) => 
                team.name.toUpperCase() < nextTeam.name.toUpperCase()
                    ? -1
                    : 1
            );
    };
    
    const [ groupedEmployees, setGroupedEmployees ] = useState(groupTeamMembers());

    const handleTeamClick = ev => {
        const transformedGroupedEmployees = groupedEmployees.map(team => 
                team.name == ev.currentTarget.id
                    ? { ...team, collapsed: !team.collapsed }
                    : team
            );

        setGroupedEmployees(transformedGroupedEmployees);
    };

    return (
        <main className="container text-center">
            {
                groupedEmployees.map(team => (
                    <div key={ team.name } type="button" className="card mt-2">
                        <h4 id={ team.name } className="card-header text-secondary bg-white" onClick={ handleTeamClick }>
                            { team.name == 'none' ? 'Not Allocated' : `Team name: ${ team.name }` }
                        </h4>
                        <div id={ `collapse_${ team.name }` } className={ team.collapsed ? 'collapse' : null }>
                            <hr/>
                            {
                                team.members.map(member => (
                                    <div key={ member.id } className="mt-2">
                                        <h5 className='card-title mt-2 text-dark'>Full Name: { member.fullName }</h5>
                                        <p>Designation: { member.designation }</p>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                ))
            }
        </main>
    );
};

export default Groups;
