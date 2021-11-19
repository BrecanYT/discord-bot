# Google Image Search

This is a simple library to get an image URL from a search string via Google search.

### Prerequisites

1. Create a new search engine [here](https://cse.google.com/cse/all), check image search and copy your search engine key
2. Create a new Google Custom Search API key [here](https://console.cloud.google.com/apis/api/customsearch.googleapis.com)

### Install

`npm i -S simple-google-image-search`

### Usage

```
import {GoogleImageSearch} from 'simple-google-image-search';

const imageSearch = new GoogleImageSearch("your API key", "your search engine key");

// Get an image URL of a banana
imageSearch.getImageUrl('banana').then((res) => {
  console.log(res);
});
```
