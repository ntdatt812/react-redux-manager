import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import UserTable from '../user/table.user';

const TabBar = () => {
    return (
        <Tabs
            defaultActiveKey="user"
            id="uncontrolled-tab-example"
            className="mb-3"
        >
            <Tab eventKey="user" title="Users">
                <UserTable />
            </Tab>
            <Tab eventKey="Blog" title="Blogs">
                Tab content for blogs
            </Tab>
        </Tabs>
    );
}

export default TabBar;