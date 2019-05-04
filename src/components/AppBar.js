import React, { Component } from 'react'
import { Box, Heading } from 'grommet';

class AppBar extends Component {
    render() {
        return <Box
            tag='header'
            direction='row'
            align='center'
            justify='between'
            background='brand'
            pad={{
                left: 'medium',
                right: 'medium',
                vertical: 'small'
            }}
            elevation='medium'
            style={{ zIndex: '1' }}
        >
            <Heading
                level="4"
                margin="xsmall"
            >
                Anything
        </Heading>
            <Box>

            </Box>
        </Box>
    }
}
export default AppBar;