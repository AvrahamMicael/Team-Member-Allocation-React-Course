const Header = ({ selectedTeam, teamSize }) => (
    <header className="container text-center">
        <div className="row justify-content-center mt-3 mb-4">
            <h1>Team Member Allocation</h1>
            <h3>{ selectedTeam } has { teamSize } member{ teamSize == 1 ? null : 's' }</h3>
        </div>
    </header>
);

export default Header;
