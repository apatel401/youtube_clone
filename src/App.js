import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

import "./App.css";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
    element: <Body />,
    children: [
      {
        path: "/",
        element: <MainContainer />
      },
      {
        path: "watch",
        element: <WatchPage />
      },
    ]
  }
  ]);

  return (
    <>
      <Provider store={store}>
        {/* <Header /> */}
        <RouterProvider router={appRouter} />
      </Provider>
    </>
  );
}

export default App;
