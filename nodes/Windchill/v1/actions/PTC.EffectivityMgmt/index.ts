import * as ActionGetEffectivities from './Action_GetEffectivities';
import * as ActionSetEffectivities from './Action_SetEffectivities';
import * as GetPartEffectivityContext from './GetPartEffectivityContext';
import * as GetPartEffectivityContexts from './GetPartEffectivityContexts';
import * as PartEffectivityContextContextGetContainer from './PartEffectivityContext.Context.GetContainer';
import * as PartEffectivityContextOrganizationGetOrganization from './PartEffectivityContext.Organization.GetOrganization';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionGetEffectivities,
	ActionSetEffectivities,
	GetPartEffectivityContext,
	GetPartEffectivityContexts,
	PartEffectivityContextContextGetContainer,
	PartEffectivityContextOrganizationGetOrganization,
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
					'PTC.EffectivityMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v4/EffectivityMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.EffectivityMgmt',
				],
			},
		},
		default: 'POST /GetEffectivities',
		options: [
			{
				name: 'Action_GetEffectivities',
				value: 'POST /GetEffectivities',
				description: 'Execute GetEffectivities - post /GetEffectivities',
				action: 'Action_GetEffectivities',
			},
			{
				name: 'Action_SetEffectivities',
				value: 'POST /SetEffectivities',
				description: 'Execute SetEffectivities - post /SetEffectivities',
				action: 'Action_SetEffectivities',
			},
			{
				name: 'GetPartEffectivityContext',
				value: "GET /PartEffectivityContexts('{PartEffectivityContextId}')",
				description: "Get PartEffectivityContext for a given PartEffectivityContextId - get /PartEffectivityContexts('{PartEffectivityContextId}')",
				action: 'GetPartEffectivityContext',
			},
			{
				name: 'GetPartEffectivityContexts',
				value: 'GET /PartEffectivityContexts',
				description: 'Get PartEffectivityContexts - get /PartEffectivityContexts',
				action: 'GetPartEffectivityContexts',
			},
			{
				name: 'PartEffectivityContext.Context.GetContainer',
				value: "GET /PartEffectivityContexts('{PartEffectivityContextId}')/Context",
				description: "Get Container - get /PartEffectivityContexts('{PartEffectivityContextId}')/Context",
				action: 'PartEffectivityContext.Context.GetContainer',
			},
			{
				name: 'PartEffectivityContext.Organization.GetOrganization',
				value: "GET /PartEffectivityContexts('{PartEffectivityContextId}')/Organization",
				description: "Get Organization - get /PartEffectivityContexts('{PartEffectivityContextId}')/Organization",
				action: 'PartEffectivityContext.Organization.GetOrganization',
			},
		],
	},
	...ActionGetEffectivities.description,
	...ActionSetEffectivities.description,
	...GetPartEffectivityContext.description,
	...GetPartEffectivityContexts.description,
	...PartEffectivityContextContextGetContainer.description,
	...PartEffectivityContextOrganizationGetOrganization.description,
];
