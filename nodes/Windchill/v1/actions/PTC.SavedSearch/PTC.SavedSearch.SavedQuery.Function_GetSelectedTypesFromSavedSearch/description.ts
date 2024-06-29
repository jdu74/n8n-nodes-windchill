import { INodeProperties } from "n8n-workflow";

export const PtcSavedSearchSavedQueryFunctionGetSelectedTypesFromSavedSearchDescription: INodeProperties[] = [
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
					"GET /SavedQueries('{SavedQueryId}')/PTC.SavedSearch.GetSelectedTypesFromSavedSearch()",
				],
			},
		},
		required: true,
	},
];
