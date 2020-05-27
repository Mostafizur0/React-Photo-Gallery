import React, { Component } from "react";
import unspash from "../api/unsplash";
import SearchBar from "./SearchBar";
import ImageList from './imageList';

class App extends Component {
	state = {
		images: [],
	};

	onSearchSubmit = async (term) => {
		const response = await unspash.get("/search/photos", {
			params: { query: term },
		});

		console.log(response.data.results);
		this.setState({ images: response.data.results });
	};

	render() {
		return (
			<div>
			<div className="ui container" style={{ marginTop: "10px" }}>
				<SearchBar onSubmit={this.onSearchSubmit} />
				Found: {this.state.images.length} images
				<ImageList images={ this.state.images } /></div>
			</div>
		);
	}
}

export default App;
