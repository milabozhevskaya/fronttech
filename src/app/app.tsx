import { Layout } from "@/shared/ui/layout";
import { Header } from "@/widgets/header";
import { Page } from "@/pages";
import { useState } from "react";
import { useService } from "@/shared/api/useService";
import { getUser } from "@/shared/api/getUser";

const App = (): JSX.Element => {
	const [query, setQuery] = useState("");
	const { data, loading, error } = useService(getUser, { query });
	return (
		<Layout>
			<Layout.Header as={Header} onSearch={setQuery} />
			<Layout.Main as={Page} user={data} loading={loading} notFound={!!error} />
		</Layout>
	);
};

export { App };
