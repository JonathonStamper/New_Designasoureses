import React from 'react'

export default function Predictions_filter({ setSelectedFilter }) {

    return (
        <div className='absolute top-0 right-0 m-5 p-5 rounded-md bg-slate-200 flex flex-col'>
            <div>
            <input type="radio" id="wildfire" name="fav_language" value="fire" onClick={(e) => setSelectedFilter(e.target.value)} />
            <label for="wildfire">Wildfires</label>
            </div>
            <div>
            <input type="radio" id="floods" name="fav_language" value="flood" onClick={(e) => setSelectedFilter(e.target.value)}/>
            <label for="floods">Floods</label>
            </div>
            <div>
            <input type="radio" id="land" name="fav_language" value="land" onClick={(e) => setSelectedFilter(e.target.value)}/>
            <label for="land">Land</label>
            </div>

            <div>
            <input type="radio" id="rain" name="fav_language" value="rain" onClick={(e) => setSelectedFilter(e.target.value)}/>
            <label for="rain">Rain</label>
            </div>
        </div>
    )
}
