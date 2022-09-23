const TeamsSelect = ({ employees, selectedTeam, handleTeamSelectedChange }) => {

    const teams = employees.reduce((teamsNamesArray, employee) => {
        const teamName = employee.teamName || 'Not Allocated';
        if(!teamsNamesArray.some(_teamName => _teamName == teamName)) teamsNamesArray.push(teamName);
        return teamsNamesArray;
    }, [])
        .sort();

    return (
        <select className="form-select form-select-lg" value={ selectedTeam } onChange={ handleTeamSelectedChange }>
            {
                teams.map(teamName => (
                    <option
                        key={ teamName }
                        value={ teamName != 'Not Allocated' ? teamName : '' }
                    >
                        { teamName }
                    </option>
                ))
            }
        </select>
    );
};

export default TeamsSelect;
