"use client";

import DatateReserve from "@/components/DateReserve";
import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField } from "@mui/material";
import { useState } from "react";

export default function BookingPage(){
    const [venue, setVenue] = useState('');

    const handleChange = (event: SelectChangeEvent) => {
        setVenue(event.target.value as string);
    };
    return (
        <div className="flex flex-col gap-4 p-5 pl-20 pr-20">
            <h1 className="text-black">Venue Booking</h1>
            <h1 className="text-black">Date Reserve Component</h1>
            <TextField label="Name-Lastname" name="Name-Lastname" variant="standard"/> 
            <TextField label="Contact-Number" name="Contact-Number" variant="standard"/>
            <FormControl fullWidth variant="standard">
                <InputLabel id="venue" variant="standard">Venue</InputLabel>
                <Select
                    labelId="venue"
                    id="venue"
                    value={venue}
                    label="Venue"
                    onChange={handleChange}
                    variant="standard"
                >
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
                </Select>
            </FormControl>
            <DatateReserve/>
            <Button name="Book Venue">Book Venue</Button>
        </div>
    );
}