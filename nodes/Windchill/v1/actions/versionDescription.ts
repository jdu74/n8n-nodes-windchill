import {
	INodeTypeDescription,
} from 'n8n-workflow';

import * as PtcBomTransformation from './PTC.BomTransformation';
import * as PtcCadDocumentMgmt from './PTC.CADDocumentMgmt';
import * as PtcChangeMgmt from './PTC.ChangeMgmt';
import * as PtcDocMgmt from './PTC.DocMgmt';
import * as PtcFactory from './PTC.Factory';
import * as PtcMfgProcMgmt from './PTC.MfgProcMgmt';
import * as PtcProdMgmt from './PTC.ProdMgmt';
import * as PtcProdPlatformMgmt from './PTC.ProdPlatformMgmt';
import * as PtcViewMgmt from './PTC.ViewMgmt';
import * as PtcVisualization from './PTC.Visualization';

export const versionDescription: INodeTypeDescription = {
	displayName: 'Windchill',
	name: 'windchillundefined',
	icon: 'file:windchill.svg',
	group: ['output'],
	subtitle: '={{$parameter["operation"] + ": " + $parameter["resource"]}}',
	description: 'Windchill REST API - 2',
	version: 1,
	defaults: {
		name: 'Windchill'
	},
	inputs: ['main'],
	outputs: ['main'],
	credentials: 
	[
		{
			name: 'windchillApiKeysApi',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'apiKeys',
					],
				},
			},
		},
		{
			name: 'windchillOAuth2Api',
			required: true,
			displayOptions: {
				show: {
					authentication: [
						'oAuth2',
					],
				},
			},
		},
	],
	properties: [
		{
			displayName: 'Authentication',
			name: 'authentication',
			type: 'options',
			noDataExpression: true,
			options: [
				{
					name: 'ApiKeys',
					value: 'apiKeys',
				},
				{
					name: 'OAuth2',
					value: 'oAuth2',
				},
			],
			default: 'apiKeys',
		},
		{
			displayName: 'Resource',
			name: 'resource',
			type: 'options',
			noDataExpression: true,
			default: 'PTC.BomTransformation',
			options: [
				{
					name: 'Ptc Bom Transformation',
					value: 'PTC.BomTransformation',
					description: '',
				},
				{
					name: 'Ptc Cad Document Mgmt',
					value: 'PTC.CADDocumentMgmt',
					description: '',
				},
				{
					name: 'Ptc Change Mgmt',
					value: 'PTC.ChangeMgmt',
					description: '',
				},
				{
					name: 'Ptc Doc Mgmt',
					value: 'PTC.DocMgmt',
					description: '',
				},
				{
					name: 'Ptc Factory',
					value: 'PTC.Factory',
					description: '',
				},
				{
					name: 'Ptc Mfg Proc Mgmt',
					value: 'PTC.MfgProcMgmt',
					description: '',
				},
				{
					name: 'Ptc Prod Mgmt',
					value: 'PTC.ProdMgmt',
					description: '',
				},
				{
					name: 'Ptc Prod Platform Mgmt',
					value: 'PTC.ProdPlatformMgmt',
					description: '',
				},
				{
					name: 'Ptc View Mgmt',
					value: 'PTC.ViewMgmt',
					description: '',
				},
				{
					name: 'Ptc Visualization',
					value: 'PTC.Visualization',
					description: '',
				},
			],
		},
		...PtcBomTransformation.descriptions,
		...PtcCadDocumentMgmt.descriptions,
		...PtcChangeMgmt.descriptions,
		...PtcDocMgmt.descriptions,
		...PtcFactory.descriptions,
		...PtcMfgProcMgmt.descriptions,
		...PtcProdMgmt.descriptions,
		...PtcProdPlatformMgmt.descriptions,
		...PtcViewMgmt.descriptions,
		...PtcVisualization.descriptions,
	],
};
