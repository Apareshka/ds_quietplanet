import Head from "next/head"
import Footer from "../components/Footer"
import Header from "../components/Header"
import Charts from "../components/Charts"
import { Typography, Container, Toolbar, Switch, Paper, Tabs, Tab, Box } from "@material-ui/core"

const TabContent = React.memo(({ value, index, children }) => (
    value !== index ? null : (
        <Box className="tab-content">
            {children}
        </Box>
    )
))

export default class Tools extends React.Component {
    constructor () {
        super()
        this.state = {
            value: 0,
            displayDifferenceChart: true
        }
    }

    handleTabChange (event, newValue) {
        this.setState({ value: newValue })
    }

    handleDiffChange (event, newValue) {
        this.setState({ displayDifferenceChart: newValue })
    }

    render () {
        return (
            <div className="root">
                <Head>
                    <title>Quiet planet challenge - Tools</title>
                </Head>

                <div className="top">
                    <div className="content">
                        <Typography variant="h1" component="h2">Tools</Typography>
                        <Container>
                            <Toolbar>
                                <Typography>Display difference chart:</Typography>
                                <Switch checked={this.state.displayDifferenceChart} onChange={this.handleDiffChange.bind(this)} color="primary" />
                            </Toolbar>
                        </Container>
                        <Container>
                            <Tabs
                                value={this.state.value}
                                onChange={this.handleTabChange.bind(this)}
                                indicatorColor="primary"
                                textColor="primary"
                              >
                                <Tab label="Charts" />
                            </Tabs>
                            <TabContent index={0} value={this.state.value}>
                                <Charts chartsToLoad="all" displayDifferenceChart={this.state.displayDifferenceChart} />
                            </TabContent>
                            <TabContent index={1} value={this.state.value}>
                                This is not chart
                            </TabContent>
                        </Container>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}
