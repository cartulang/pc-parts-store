import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ProductsProvider } from "./context/ProductsContext";
import { QueryClient, QueryClientProvider } from "react-query";
import "bootstrap/dist/css/bootstrap.css";
import "@popperjs/core";
import { BrowserRouter } from "react-router-dom";

const queryClient = new QueryClient();

ReactDOM.render(
	<React.StrictMode>
		<QueryClientProvider client={queryClient}>
			<BrowserRouter>
				<ProductsProvider>
					<App />
				</ProductsProvider>
			</BrowserRouter>
		</QueryClientProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
