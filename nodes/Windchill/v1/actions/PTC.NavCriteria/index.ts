import * as GetNavigationCriteria from './GetNavigationCriteria';
import * as GetNavigationCriterias from './GetNavigationCriterias';

import { INodeProperties } from 'n8n-workflow';

export {
	GetNavigationCriteria,
	GetNavigationCriterias,
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
					'PTC.NavCriteria',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/NavCriteria',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.NavCriteria',
				],
			},
		},
		default: 'GET /NavigationCriterias',
		options: [
			{
				name: 'GetNavigationCriteria',
				value: "GET /NavigationCriterias('{NavigationCriteriaId}')",
				description: "Get NavigationCriteria for a given NavigationCriteriaId - get /NavigationCriterias('{NavigationCriteriaId}')",
				action: 'GetNavigationCriteria',
			},
			{
				name: 'GetNavigationCriterias',
				value: 'GET /NavigationCriterias',
				description: 'Get NavigationCriterias - get /NavigationCriterias',
				action: 'GetNavigationCriterias',
			},
		],
	},
	...GetNavigationCriteria.description,
	...GetNavigationCriterias.description,
];
