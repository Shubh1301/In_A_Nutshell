
import {Box, Typography, styled} from '@mui/material';

const Container = styled(Box)(( { theme}) => ({
    background: '#86C232',
    color: '#fff',
    display: 'flex',
    alignItems: 'center',
    height: 48,
    marginBottom: 30,
    [theme.breakpoints.down('md')]: {
        display: 'none'
    }
}));

const Image = styled('img')({
    height: 34,
    '&:last-child' : {
        margin: '0 10px 0 10px'
    }
}) 
const Text = styled(Typography)`
    font-size: 13px;
    font-weight: 10;
    margin-left: 70px;

`

const InfoHeader = () => {

    const appleStore = 'https://assets.inshorts.com/website_assets/images/appstore.png';
    const googleStore = 'https://assets.inshorts.com/website_assets/images/playstore.png';

    return(
        <Container>
           <Text> 
            For Better experience install our apps available on
            </Text>

            <Box style={{display: 'flex', marginLeft: 'auto'}}>
                <Image src={appleStore} alt="applestore"/>
                <Image src={googleStore} alt="googlestore"/>
            </Box>
        </Container>
        

    )
}

export default InfoHeader;