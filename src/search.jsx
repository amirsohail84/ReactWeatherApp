import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

export default function Search({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const URL = import.meta.env.VITE_WEATHER_API_URL;
    const API = import.meta.env.VITE_WEATHER_API_KEY;

    const getInfo = async () => {
        try {
            let res = await fetch(`${URL}?q=${city}&appid=${API}&units=metric`);
            let jres = await res.json();


            if (jres.cod !== 200) {
                throw new Error(jres.message);
            }

            return {
                city: city,
                temp: jres.main.temp,
                feelsLike: jres.main.feels_like,
                tempMin: jres.main.temp_min,
                tempMax: jres.main.temp_max,
                humidity: jres.main.humidity,
                weather: jres.weather[0].description,
            };
        } catch (err) {
            throw err;
        }
    };

    const handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    const handleSubmit = async (evt) => {
        evt.preventDefault();
        setError(false);
        setLoading(true);

        try {
            let newInfo = await getInfo();
            updateInfo(newInfo);
            setCity("");
        } catch (err) {
            setError(true);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            <div className="searchbox">
                <form style={{ width: "19rem" }} onSubmit={handleSubmit}>
                    <TextField
                        id="outlined-basic"
                        label="Enter City / Country"
                        variant="outlined"
                        required
                        value={city}
                        onChange={handleChange}
                        sx={{
                            "& .MuiOutlinedInput-root": {
                                "& fieldset": {
                                    borderColor: "white",
                                },
                                "&.Mui-focused fieldset": {
                                    borderColor: "white",
                                },
                                "&:hover fieldset": {
                                    borderColor: "white",
                                }
                            },
                            "& .MuiInputLabel-root": {
                                color: "white",
                            },
                            "& .MuiInputLabel-root.Mui-focused": {
                                color: "white",
                            },
                            "& .MuiInputBase-input": {
                                color: "white",
                            }
                        }}
                    />

                    <Button className="ani-btn" variant="contained" type="submit" disabled={loading}>
                        {!loading && <SearchIcon />}
                        {loading ? "Loading..." : "Search"}
                    </Button>

                </form>
            </div>
            {loading && <b><p style={{ color: "blue" }}>Fetching data...</p></b>}
            {error && !loading && <p style={{ color: "red" }}>No such place found!</p>}
        </>
    );
}
