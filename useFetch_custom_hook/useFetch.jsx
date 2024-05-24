
export default function useFetch({url, options = {}}){
	// we manage 3 states: data, loading, error
	const [data, setData] = useState(null);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(null);

	async function fetchData(){
		setLoading(true);
		try {
			const res = await fetch(url);
			if(!res.ok){
				throw new Error(res.statusText);
			}

			const data = res.json();
			setData(data);
			setLoading(false);
			setError(null);
		} catch (error) {
			setError(error.message);
			setLoading(false);
		}
	}

	useEffect(() => {
		fetchData();
		return () => {};
	}, [url]);

	return {data, error, loading};
}