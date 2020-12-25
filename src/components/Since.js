import moment from "moment";
import { useState } from "react";
import "./Since.css";

const Since = () => {
	const [today] = useState(moment())
	const [started] = useState(moment("20200724", "YYYYMMDD"));

	const [years] = useState(today.diff(started, 'year'));
	started.add(years, "years");

	const [months] = useState(today.diff(started, "months"));
	started.add(months, "months");

	const [days] = useState(today.diff(started, "days"));
	started.add(days, "days");

	const [hours] = useState(today.diff(started, "hours"));
	started.add(hours, "hours");

	const [minutes] = useState(today.diff(started, "minutes"));
	started.add(minutes, "minutes");

	const [seconds] = useState(today.diff(started, "seconds"));
	started.add(seconds, "seconds");

	return (
		<div className="Since">
			<h2>We have been dating for...</h2>

			<div className="plank">
				<h1>{years}</h1>
				<p>{years === 1 ? "Year" : "Years"}</p>
			</div>

			<div className="plank">
				<h1>{months}</h1>
				<p>{months === 1 ? "Month" : "Months"}</p>
			</div>

			<div className="plank">
				<h1>{days}</h1>
				<p>{days === 1 ? "Day" : "Days"}</p>
			</div>

			<div className="plank">
				<h1>{hours}</h1>
				<p>{hours === 1 ? "Hour" : "Hours"}</p>
			</div>
			
			<div className="plank">
				<h1>{minutes}</h1>
				<p>{minutes === 1 ? "Minute" : "Minutes"}</p>
			</div>

			<div className="plank">
				<h1>{seconds}</h1>
				<p>{seconds === 1 ? "Second" : "Seconds"}</p>
			</div>
		</div>
	);
}

export default Since;