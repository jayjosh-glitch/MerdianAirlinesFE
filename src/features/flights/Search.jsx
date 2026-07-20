import { useContext, useState } from "react"
import AuthContext from "../../context/AuthContext"
import AuthNavbar from "../../components/AuthNavbar"
import Navbar from "../../components/Navbar"
import { useFlight } from "../../hooks/useFlight"
import PassModel from "../../components/PassModel"
import { useDispatch } from "react-redux"
import { selectFlight } from "../../redux/FlightSlice"


const Search = () => {

    const { currentuser } = useContext(AuthContext);
    const { GetFlights } = useFlight()
    const [flightList, setflightList] = useState([])
    const [addpass, setaddpass] = useState(null)

    const [searchdata, setsearchdata] = useState({
        source: "",
        destination: "",
        departuredate: "",
        isonewaytrip: true,
        isroundtrip: false,
        returndat: "",
        flightclass: "Economy"
    });

    const dispatch = useDispatch();

    const handlechange = (e) => {
        const { name, value } = e.target;

        setsearchdata({
            ...searchdata,
            [name]: value
        });
    };

    const handlesearch = async () => {
        console.log(searchdata)
        const result = await GetFlights(searchdata.source, searchdata.destination, searchdata.departuredate, searchdata.isroundtrip, searchdata.isonewaytrip, searchdata.flightclass)
        setflightList(result)
        console.log(result)
    }

    const handleselectedflight = (flight) => {
        dispatch(selectFlight(flight))
        setaddpass(true)
    }

    return (
        <>
            {currentuser ?
                <AuthNavbar user={currentuser} />
                :
                <Navbar />
            }


            <main className="min-h-screen bg-gray-100 px-5 py-10">

                <div className="w-full max-w-6xl mx-auto">

                    {/* Hero Image */}
                    <div className="rounded-t-2xl overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80"
                            alt="View from airplane window above clouds"
                            className="w-full h-72 object-cover object-center"
                        />
                    </div>


                    {/* Search Section */}
                    <section className=" bg-white  shadow-lg rounded-b-2xl  p-6 -mt-1 ">

                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Search your Flights here
                        </h2>


                        {/* Trip Type */}
                        <div className="flex gap-4 mb-6">

                            <button
                                type="button"
                                onClick={() =>
                                    setsearchdata({
                                        ...searchdata,
                                        isonewaytrip: true,
                                        isroundtrip: false
                                    })
                                }
                                className={`px-6 py-2 rounded-full text-sm font-medium ${searchdata.isonewaytrip
                                    ? "bg-blue-900 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                One way
                            </button>


                            <button
                                type="button"
                                onClick={() =>
                                    setsearchdata({
                                        ...searchdata,
                                        isonewaytrip: false,
                                        isroundtrip: true
                                    })
                                }
                                className={`px-6 py-2 rounded-full text-sm font-medium ${searchdata.isroundtrip
                                    ? "bg-blue-900 text-white"
                                    : "text-gray-600 hover:bg-gray-100"
                                    }`}
                            >
                                Round trip
                            </button>

                        </div>

                        {/* Search Bar */}

                        <div className="flex items-end gap-3">
                            {/* Source */}
                            <div className="flex-1">
                                <label className="block text-xs font-medium text-gray-500 mb-2">
                                    FROM
                                </label>

                                <input
                                    type="text"
                                    name="source"
                                    value={searchdata.source}
                                    onChange={handlechange}
                                    placeholder="Mumbai (BOM)"
                                    className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-sm
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                " />
                            </div>

                            {/* Destination */}

                            <div className="flex-1">

                                <label className="block text-xs font-medium text-gray-500 mb-2">
                                    TO
                                </label>

                                <input
                                    type="text"
                                    name="destination"
                                    value={searchdata.destination}
                                    onChange={handlechange}
                                    placeholder="London (LHR)"
                                    className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-sm
                                    focus:outline-none
                                    focus:ring-2
                                    focus:ring-blue-500
                                "/>
                            </div>
                            {/* Departure */}

                            <div className="flex-1">

                                <label className="block text-xs font-medium text-gray-500 mb-2">
                                    DEPARTURE
                                </label>

                                <input
                                    type="date"
                                    name="departuredate"
                                    value={searchdata.departuredate}
                                    onChange={handlechange}
                                    className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-sm
                                "/>
                            </div>

                            {/* Return Date */}

                            {searchdata.isroundtrip && (

                                <div className="flex-1">

                                    <label className="block text-xs font-medium text-gray-500 mb-2">
                                        RETURN
                                    </label>

                                    <input
                                        type="date"
                                        name="returndat"
                                        value={searchdata.returndat}
                                        onChange={handlechange}
                                        className="
                                        w-full
                                        border
                                        border-gray-200
                                        rounded-lg
                                        px-4
                                        py-3
                                        text-sm
                                    "
                                    />

                                </div>
                            )}

                            {/* Class */}

                            <div className="flex-1">

                                <label className="block text-xs font-medium text-gray-500 mb-2">
                                    CLASS
                                </label>


                                <select
                                    name="flightclass"
                                    value={searchdata.flightclass}
                                    onChange={handlechange}
                                    className="
                                    w-full
                                    border
                                    border-gray-200
                                    rounded-lg
                                    px-4
                                    py-3
                                    text-sm
                                " >
                                    <option>
                                        Economy
                                    </option>

                                    <option>
                                        Premium
                                    </option>

                                    <option>
                                        Business
                                    </option>

                                </select>


                            </div>

                            {/* Search Button */}

                            <button
                                type="submit"
                                className="
                                bg-blue-900
                                text-white
                                px-8
                                py-3
                                rounded-lg
                                flex
                                items-center
                                gap-2
                                hover:bg-blue-800
                                transition
                            "
                                onClick={handlesearch}
                            >
                                Search
                            </button>


                        </div>


                    </section>
                </div>

                <section className="mt-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-5">
                        Search Result
                    </h2>

                    <div className="space-y-4">
                        {flightList.map((flight, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-md border border-gray-200 p-6 hover:shadow-lg transition"
                            >
                                <div className="flex justify-between items-center">

                                    {/* Flight Details */}
                                    <div className="flex-1">

                                        <div className="flex items-center gap-4 mb-5">
                                            <h3 className="text-xl font-bold text-blue-900">
                                                {flight.flightnumber}
                                            </h3>

                                            <span className="text-gray-500">
                                                {flight.source}
                                            </span>

                                            <span className="text-gray-400">
                                                →
                                            </span>

                                            <span className="text-gray-500">
                                                {flight.destination}
                                            </span>
                                        </div>


                                        <div className="grid grid-cols-3 gap-8">

                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Departure
                                                </p>

                                                <p className="font-semibold text-gray-800">
                                                    {new Date(flight.departure)
                                                        .toLocaleDateString("en-IN", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric"
                                                        })}
                                                </p>

                                                <p className="text-blue-700 font-medium">
                                                    {new Date(flight.takeofftime)
                                                        .toLocaleTimeString("en-IN", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })}
                                                </p>
                                            </div>


                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Duration
                                                </p>

                                                <p className="font-semibold text-gray-800">
                                                    {Math.floor(flight.totalJourneytime / 60)}h{" "}
                                                    {flight.totalJourneytime % 60}m
                                                </p>

                                                <p className="text-sm text-gray-500">
                                                    {flight.totalJourneyDistance} km
                                                </p>
                                            </div>


                                            <div>
                                                <p className="text-sm text-gray-500">
                                                    Arrival
                                                </p>

                                                <p className="font-semibold text-gray-800">
                                                    {new Date(flight.arrivaltime)
                                                        .toLocaleDateString("en-IN", {
                                                            day: "2-digit",
                                                            month: "short",
                                                            year: "numeric"
                                                        })}
                                                </p>

                                                <p className="text-blue-700 font-medium">
                                                    {new Date(flight.arrivaltime)
                                                        .toLocaleTimeString("en-IN", {
                                                            hour: "2-digit",
                                                            minute: "2-digit"
                                                        })}
                                                </p>
                                            </div>

                                        </div>

                                    </div>


                                    {/* Price Section */}
                                    <div className="border-l pl-8 ml-8 text-center">

                                        <p className="text-sm text-gray-500">
                                            {flight.flightclassname}
                                        </p>

                                        <p className="text-2xl font-bold text-green-700">
                                            ₹{flight.priceperPerson.toLocaleString("en-IN")}
                                        </p>

                                        <button
                                            className="mt-4 bg-blue-900 text-white px-6 py-2 rounded-lg hover:bg-blue-800 transition"
                                            onClick={() => { handleselectedflight(flight) }}>
                                            Select
                                        </button>

                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {addpass && <PassModel setaddpass={setaddpass} />}
            </main>
        </>
    );
}

export default Search