import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import getNewsDataAll from "../resall";
import getNewsDataCat from "../rescat";

// Функция для загрузки состояния из sessionStorage
const loadState = () => {
  try {
    const serializedState = sessionStorage.getItem("newsState");
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

// Функция для сохранения состояния в sessionStorage
const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    sessionStorage.setItem("newsState", serializedState);
  } catch (err) {}
};

// Асинхронное действие для получения новостей
export const fetchNews = createAsyncThunk(
  "news/fetchNews",
  async (arg, { rejectWithValue }) => {
    try {
  
      const response = await getNewsDataCat("");
      const resPicture = await getNewsDataAll("Россия");
      const resEconomy = await getNewsDataAll("Новости Экономики");
      const resSport = await getNewsDataAll("Новости Спорта");
      const resPolitic = await getNewsDataAll("Новости Политики");
      const resScience = await getNewsDataAll("Новости Науки");
      const resCulture = await getNewsDataAll("Новости Культуры");
      const resAncident = await getNewsDataAll("Происшествия");

    
      return [
        response,
        resPicture,
        resEconomy,
        resSport,
        resPolitic,
        resScience,
        resCulture,
        resAncident,
      ];
    } catch (error) {
      
      return rejectWithValue(error.message);
    }
  }
);


const initialState = loadState() || {
  data: {},
  economy: {},
  sport: {},
  politic: {},
  science: {},
  culture: {},
  ancident: {},
  smallArticles: {},
  mainArticles: {},
  status: "idle",
  error: null,

  retryCount: 0,
};

const newsSlice = createSlice({
  name: "news",
  initialState,

  extraReducers: (builder) => {
    builder
      .addCase(fetchNews.pending, (state) => {
        state.status = "pending";
        state.retryCount += 1;
      })
      .addCase(fetchNews.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.smallArticles = JSON.parse(state.data[1]);
        state.mainArticles = JSON.parse(state.data[1]);
        state.economy = JSON.parse(state.data[2]);
        state.sport = JSON.parse(state.data[3]);
        state.politic = JSON.parse(state.data[4]);
        state.science = JSON.parse(state.data[5]);
        state.culture = JSON.parse(state.data[6]);
        state.ancident = JSON.parse(state.data[7]);
        state.retryCount = 0;
        saveState(state);
      })
      .addCase(fetchNews.rejected, (state, action) => {
        state.status = "rejected";
        state.error = action.error.message;
      });
  },
});

export const { selectMainNews, selectSmallNews } = newsSlice.actions;
export default newsSlice.reducer;
