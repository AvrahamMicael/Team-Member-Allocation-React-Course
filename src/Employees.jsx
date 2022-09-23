import maleImg from './img/male.jpg';
import femaleImg from './img/female.jpg';
import TeamsSelect from './TeamsSelect';

const Employees = ({ employees, setEmployees, selectedTeam, setSelectedTeam }) => {

    const handleTeamSelectedChange = ev => {
        setSelectedTeam(ev.target.value);
    };

    const handleEmployeeCardClick = ev => {
        const transformedEmployees = employees.map(employee =>
                employee.id == parseInt(ev.currentTarget.id)
                    ? employee.teamName == selectedTeam
                        ? { ...employee, teamName: '' }
                        : { ...employee, teamName: selectedTeam }
                    : employee
            );

        setEmployees(transformedEmployees);
    };

    return (
        <main className='container'>
            <div className="row justify-content-center my-3">
                <div className="col-6">
                    <TeamsSelect
                        employees={ employees }
                        selectedTeam={ selectedTeam }
                        handleTeamSelectedChange={ handleTeamSelectedChange }
                    />
                </div>
            </div>
            <div className='row justify-content-center'>
                <div className="col-8">
                    <div className="card-collection">
                        {
                            employees.map(employee => (
                                <div className={ `card m-1 ${ employee.teamName == selectedTeam ? 'standout' : null }` } type='button' id={ employee.id } key={ employee.id } onClick={ handleEmployeeCardClick }>
                                    <img src={ employee.gender == 'male' ? maleImg : femaleImg } className='card-img-top'/>
                                    <div className="card-body">
                                        <h5 className="card-title">{ employee.fullName }</h5>
                                        <p className='card-text'>{ employee.fullName } - { employee.designation }</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Employees;
