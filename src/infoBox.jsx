import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import WbSunnyIcon from '@mui/icons-material/WbSunny';


export default function InfoBox({ info }) {
    const coldimg = "https://plus.unsplash.com/premium_photo-1670596899123-c4c67735d77a?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const warmimg = "https://images.unsplash.com/photo-1611856862210-2482401565a3?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    const rainimg = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    if (!info.city) {
        return
    } else {
        return (
            <>
                <div className='ani-card'>
                    <Card sx={{ backgroundColor:'black' }}>
                        <CardMedia
                            sx={{ height: 250 }}
                            image={info.humidity > 85 ? rainimg : info.temp > 18 ? warmimg : coldimg}

                        />
                        <CardContent sx={{backgroundColor:'black'}}>
                            <Typography gutterBottom variant="h5" component="div" sx={{color:'white'}}>
                                {info.city ? info.city.charAt(0).toUpperCase() + info.city.slice(1) : ''}
                                <span style={{ marginLeft: 8 }}></span>
                                {info.humidity > 85 ? <ThunderstormIcon /> : info.temp > 18 ? <WbSunnyIcon /> : <AcUnitIcon />}
                                <span />
                            </Typography>
                            <Typography variant="body2" sx={{ color: 'white' }} component={"span"}>
                                <div>Temperature: {info.temp}&deg;C</div>
                                <div>Feels like: {info.feelsLike}&deg;C</div>
                                <div>Humidity: {info.humidity}</div>
                                <div>Min Temp.: {info.tempMin}&deg;C</div>
                                <div>Max Temp.: {info.tempMax}&deg;C</div>
                                <div>Described as {info.weather}</div>
                            </Typography>
                        </CardContent>
                    </Card>
                </div>
            </>
        );
    }
};