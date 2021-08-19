import React, {useContext, useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import {GlobalContext} from "../context/GlobalContext";
import ItemList from "../components/Item/ItemList";

function TabPanel(props) {
    const {children, value, index, ...other} = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                   {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: "#fff",
        padding:theme.spacing(3),
    },
}));

export default function ResultFilter() {
    const classes = useStyles();
    const [value, setValue] = useState(0);
    const {filterData, searchResults} = useContext(GlobalContext)

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
            >
                <Tab label="All" {...a11yProps(0)} />
                <Tab label="TV" {...a11yProps(1)} />
                <Tab label="Movies" {...a11yProps(2)} />
                <Tab label="Names" {...a11yProps(3)} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <ItemList data={searchResults}/>
            </TabPanel>
            {filterData?.result?.map((item, index) =>
                <TabPanel value={value} index={index} key={index}>
                    <ItemList key={index} data={item}/>
                </TabPanel>
            )}
        </div>
    );
}