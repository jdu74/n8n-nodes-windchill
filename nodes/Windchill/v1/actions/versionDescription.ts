import {
	INodeTypeDescription,
} from 'n8n-workflow';

import * as PtcAdministration from './PTC.Administration';
import * as PtcBacMgmt from './PTC.BACMgmt';
import * as PtcBomTransformation from './PTC.BomTransformation';
import * as PtcCadDocumentMgmt from './PTC.CADDocumentMgmt';
import * as PtcChangeMgmt from './PTC.ChangeMgmt';
import * as PtcClfStructure from './PTC.ClfStructure';
import * as PtcDataAdmin from './PTC.DataAdmin';
import * as PtcDocMgmt from './PTC.DocMgmt';
import * as PtcDynamicDocMgmt from './PTC.DynamicDocMgmt';
import * as PtcEffectivityMgmt from './PTC.EffectivityMgmt';
import * as PtcEsi from './PTC.ESI';
import * as PtcEventMgmt from './PTC.EventMgmt';
import * as PtcFactory from './PTC.Factory';
import * as PtcIe from './PTC.IE';
import * as Ptc from './PTC';
import * as PtcMfgProcMgmt from './PTC.MfgProcMgmt';
import * as PtcNavCriteria from './PTC.NavCriteria';
import * as PtcPrincipalMgmt from './PTC.PrincipalMgmt';
import * as PtcProdMgmt from './PTC.ProdMgmt';
import * as PtcProdPlatformMgmt from './PTC.ProdPlatformMgmt';
import * as PtcReporting from './PTC.Reporting';
import * as PtcSavedSearch from './PTC.SavedSearch';
import * as PtcViewMgmt from './PTC.ViewMgmt';
import * as PtcVisualization from './PTC.Visualization';
import * as PtcWorkflow from './PTC.Workflow';

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
			default: 'PTC.Administration',
			options: [
				{
					name: 'Ptc Administration',
					value: 'PTC.Administration',
					description: '',
				},
				{
					name: 'Ptc Bac Mgmt',
					value: 'PTC.BACMgmt',
					description: '',
				},
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
					name: 'Ptc Clf Structure',
					value: 'PTC.ClfStructure',
					description: '',
				},
				{
					name: 'Ptc Data Admin',
					value: 'PTC.DataAdmin',
					description: '',
				},
				{
					name: 'Ptc Doc Mgmt',
					value: 'PTC.DocMgmt',
					description: '',
				},
				{
					name: 'Ptc Dynamic Doc Mgmt',
					value: 'PTC.DynamicDocMgmt',
					description: '',
				},
				{
					name: 'Ptc Effectivity Mgmt',
					value: 'PTC.EffectivityMgmt',
					description: '',
				},
				{
					name: 'Ptc Esi',
					value: 'PTC.ESI',
					description: '',
				},
				{
					name: 'Ptc Event Mgmt',
					value: 'PTC.EventMgmt',
					description: '',
				},
				{
					name: 'Ptc Factory',
					value: 'PTC.Factory',
					description: '',
				},
				{
					name: 'Ptc Ie',
					value: 'PTC.IE',
					description: '',
				},
				{
					name: 'Ptc',
					value: 'PTC',
					description: '',
				},
				{
					name: 'Ptc Mfg Proc Mgmt',
					value: 'PTC.MfgProcMgmt',
					description: '',
				},
				{
					name: 'Ptc Nav Criteria',
					value: 'PTC.NavCriteria',
					description: '',
				},
				{
					name: 'Ptc Principal Mgmt',
					value: 'PTC.PrincipalMgmt',
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
					name: 'Ptc Reporting',
					value: 'PTC.Reporting',
					description: '',
				},
				{
					name: 'Ptc Saved Search',
					value: 'PTC.SavedSearch',
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
				{
					name: 'Ptc Workflow',
					value: 'PTC.Workflow',
					description: '',
				},
			],
		},
		...PtcAdministration.descriptions,
		...PtcBacMgmt.descriptions,
		...PtcBomTransformation.descriptions,
		...PtcCadDocumentMgmt.descriptions,
		...PtcChangeMgmt.descriptions,
		...PtcClfStructure.descriptions,
		...PtcDataAdmin.descriptions,
		...PtcDocMgmt.descriptions,
		...PtcDynamicDocMgmt.descriptions,
		...PtcEffectivityMgmt.descriptions,
		...PtcEsi.descriptions,
		...PtcEventMgmt.descriptions,
		...PtcFactory.descriptions,
		...PtcIe.descriptions,
		...Ptc.descriptions,
		...PtcMfgProcMgmt.descriptions,
		...PtcNavCriteria.descriptions,
		...PtcPrincipalMgmt.descriptions,
		...PtcProdMgmt.descriptions,
		...PtcProdPlatformMgmt.descriptions,
		...PtcReporting.descriptions,
		...PtcSavedSearch.descriptions,
		...PtcViewMgmt.descriptions,
		...PtcVisualization.descriptions,
		...PtcWorkflow.descriptions,
	],
};
