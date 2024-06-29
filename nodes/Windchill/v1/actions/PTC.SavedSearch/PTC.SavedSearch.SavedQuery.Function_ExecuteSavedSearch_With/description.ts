import { INodeProperties } from "n8n-workflow";

export const PtcSavedSearchSavedQueryFunctionExecuteSavedSearchWithDescription: INodeProperties[] = [
	{
		displayName: 'SavedQueryId',
		name: 'SavedQueryId-string(path)',
		description: 'Saved Query ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.SavedSearch',
				],
				operation: [
					"GET /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.ExecuteSavedSearch(Keyword='{Keyword}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'Keyword',
		name: 'Keyword-string(path)',
		description: 'Keyword - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.SavedSearch',
				],
				operation: [
					"GET /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.ExecuteSavedSearch(Keyword='{Keyword}')",
				],
			},
		},
		required: true,
	},
];
