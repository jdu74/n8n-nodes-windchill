import * as GetSavedQueries from './GetSavedQueries';
import * as GetSavedQuery from './GetSavedQuery';
import * as PtcSavedSearchSavedQueryFunctionExecuteSavedSearchWith from './PTC.SavedSearch.SavedQuery.Function_ExecuteSavedSearch_With';
import * as PtcSavedSearchSavedQueryFunctionGetSelectedTypesFromSavedSearch from './PTC.SavedSearch.SavedQuery.Function_GetSelectedTypesFromSavedSearch';

import { INodeProperties } from 'n8n-workflow';

export {
	GetSavedQueries,
	GetSavedQuery,
	PtcSavedSearchSavedQueryFunctionExecuteSavedSearchWith,
	PtcSavedSearchSavedQueryFunctionGetSelectedTypesFromSavedSearch,
};

export const descriptions: INodeProperties[] = [
		{
		displayName: 'basePath',
		name: 'basePath',
		type: 'hidden',
		noDataExpression: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.SavedSearch',
				],
			},
		},
		default: '/Windchill/servlet/odata/v5/SavedSearch',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.SavedSearch',
				],
			},
		},
		default: 'GET /SavedQueries',
		options: [
			{
				name: 'GetSavedQueries',
				value: 'GET /SavedQueries',
				description: 'Get SavedQueries - get /SavedQueries',
				action: 'GetSavedQueries',
			},
			{
				name: 'GetSavedQuery',
				value: "GET /SavedQueries('{SavedQueryId}')",
				description: "Get SavedQuery for a given SavedQueryId - get /SavedQueries('{SavedQueryId}')",
				action: 'GetSavedQuery',
			},
			{
				name: 'PTC.SavedSearch.SavedQuery.Function_ExecuteSavedSearch_With',
				value: "GET /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.ExecuteSavedSearch(Keyword='{Keyword}')",
				description: "Function to execute saved search and get the windchill objects using saved search ID - get /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.ExecuteSavedSearch(Keyword='{Keyword}')",
				action: 'PTC.SavedSearch.SavedQuery.Function_ExecuteSavedSearch_With',
			},
			{
				name: 'PTC.SavedSearch.SavedQuery.Function_GetSelectedTypesFromSavedSearch',
				value: "GET /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.GetSelectedTypesFromSavedSearch()",
				description: "Function to fetch selected types from saved search using saved search ID - get /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.GetSelectedTypesFromSavedSearch()",
				action: 'PTC.SavedSearch.SavedQuery.Function_GetSelectedTypesFromSavedSearch',
			},
		],
	},
	...GetSavedQueries.description,
	...GetSavedQuery.description,
	...PtcSavedSearchSavedQueryFunctionExecuteSavedSearchWith.description,
	...PtcSavedSearchSavedQueryFunctionGetSelectedTypesFromSavedSearch.description,
];
