import { lazy } from "react";
import { RouteObject } from "react-router-dom";

const HomePage = lazy(() => import("./HomePage"));

export const homeRoute: RouteObject = {
	index: true,
	element: <HomePage />,
};
