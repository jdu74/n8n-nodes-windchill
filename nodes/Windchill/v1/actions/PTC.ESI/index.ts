import * as ActionAssociateDistributionTarget from './Action_AssociateDistributionTarget';
import * as ActionGetAssignedDistributionTargets from './Action_GetAssignedDistributionTargets';
import * as ActionPostResultForSubTransaction from './Action_PostResultForSubTransaction';
import * as ActionPostResultForTransaction from './Action_PostResultForTransaction';
import * as ActionPostResultForTransactionAndSubTransaction from './Action_PostResultForTransactionAndSubTransaction';
import * as ActionRemoveDistributionTarget from './Action_RemoveDistributionTarget';
import * as DistributionTargetContextGetContainer from './DistributionTarget.Context.GetContainer';
import * as GetDistributionTarget from './GetDistributionTarget';
import * as GetDistributionTargets from './GetDistributionTargets';
import * as GetEsiAbstractMesTargets from './GetESIAbstractMESTargets';
import * as GetEsiEmailTargets from './GetESIEmailTargets';
import * as GetEsiFileTargets from './GetESIFileTargets';
import * as GetEsiftpTargets from './GetESIFTPTargets';
import * as GetEsimesTargets from './GetESIMESTargets';
import * as GetEsioaTargets from './GetESIOATargets';
import * as GetEsipfmdTargets from './GetESIPFMDTargets';
import * as GetEsisapTargets from './GetESISAPTargets';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionAssociateDistributionTarget,
	ActionGetAssignedDistributionTargets,
	ActionPostResultForSubTransaction,
	ActionPostResultForTransaction,
	ActionPostResultForTransactionAndSubTransaction,
	ActionRemoveDistributionTarget,
	DistributionTargetContextGetContainer,
	GetDistributionTarget,
	GetDistributionTargets,
	GetEsiAbstractMesTargets,
	GetEsiEmailTargets,
	GetEsiFileTargets,
	GetEsiftpTargets,
	GetEsimesTargets,
	GetEsioaTargets,
	GetEsipfmdTargets,
	GetEsisapTargets,
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
					'PTC.ESI',
				],
			},
		},
		default: '/Windchill/servlet/odata/v2/ESI',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.ESI',
				],
			},
		},
		default: 'POST /AssociateDistributionTarget',
		options: [
			{
				name: 'Action_AssociateDistributionTarget',
				value: 'POST /AssociateDistributionTarget',
				description: 'Multi API to assign Distribution Targets to Assignables - post /AssociateDistributionTarget',
				action: 'Action_AssociateDistributionTarget',
			},
			{
				name: 'Action_GetAssignedDistributionTargets',
				value: 'POST /GetAssignedDistributionTargets',
				description: 'Multi API to get Distribution Targets associated with Assignables - post /GetAssignedDistributionTargets',
				action: 'Action_GetAssignedDistributionTargets',
			},
			{
				name: 'Action_PostResultForSubTransaction',
				value: 'POST /PostResultForSubTransaction',
				description: 'Execute Post Result for ESI Sub Transactions. Expected to be called after post processing ESI response by ERP Integration interface. So that Windchill can understand actual status of object Create, Update & Delete process in ERP system for given set of distribution targets. - post /PostResultForSubTransaction',
				action: 'Action_PostResultForSubTransaction',
			},
			{
				name: 'Action_PostResultForTransaction',
				value: 'POST /PostResultForTransaction',
				description: 'Execute Post Result for ESI Transaction. Expected to be called after post processing ESI response by ERP Integration interface. So that Windchill can understand actual status of object Create, Update & Delete process in ERP system for given set of distribution targets. - post /PostResultForTransaction',
				action: 'Action_PostResultForTransaction',
			},
			{
				name: 'Action_PostResultForTransactionAndSubTransaction',
				value: 'POST /PostResultForTransactionAndSubTransaction',
				description: 'Execute Post Result for ESI Transaction and Sub Transactions. Expected to be called after post processing ESI response by ERP Integration interface. So that Windchill can understand actual status of object Create, Update & Delete process in ERP system for given set of distribution targets. - post /PostResultForTransactionAndSubTransaction',
				action: 'Action_PostResultForTransactionAndSubTransaction',
			},
			{
				name: 'Action_RemoveDistributionTarget',
				value: 'POST /RemoveDistributionTarget',
				description: 'Multi API to remove Distribution Targets associated with Assignables - post /RemoveDistributionTarget',
				action: 'Action_RemoveDistributionTarget',
			},
			{
				name: 'DistributionTarget.Context.GetContainer',
				value: "GET /DistributionTargets('{DistributionTargetId}')/Context",
				description: "Get Container for a given  Distribution Target object - get /DistributionTargets('{DistributionTargetId}')/Context",
				action: 'DistributionTarget.Context.GetContainer',
			},
			{
				name: 'GetDistributionTarget',
				value: "GET /DistributionTargets('{DistributionTargetId}')",
				description: "Get Distribution Target for a given Distribution Target object - get /DistributionTargets('{DistributionTargetId}')",
				action: 'GetDistributionTarget',
			},
			{
				name: 'GetDistributionTargets',
				value: 'GET /DistributionTargets',
				description: 'Get Distribution Targets associated with Site/Organization context - get /DistributionTargets',
				action: 'GetDistributionTargets',
			},
			{
				name: 'GetESIAbstractMESTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIAbstractMESTarget',
				description: 'Get the Abstract MES type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIAbstractMESTarget',
				action: 'GetESIAbstractMESTargets',
			},
			{
				name: 'GetESIEmailTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIEmailTarget',
				description: 'Get the Email type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIEmailTarget',
				action: 'GetESIEmailTargets',
			},
			{
				name: 'GetESIFileTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIFileTarget',
				description: 'Get the File type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIFileTarget',
				action: 'GetESIFileTargets',
			},
			{
				name: 'GetESIFTPTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIFTPTarget',
				description: 'Get the FTP type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIFTPTarget',
				action: 'GetESIFTPTargets',
			},
			{
				name: 'GetESIMESTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIMESTarget',
				description: 'Get the MES type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIMESTarget',
				action: 'GetESIMESTargets',
			},
			{
				name: 'GetESIOATargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIOATarget',
				description: 'Get the Oracle Applications type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIOATarget',
				action: 'GetESIOATargets',
			},
			{
				name: 'GetESIPFMDTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESIPFMDTarget',
				description: 'Get the Proficy type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESIPFMDTarget',
				action: 'GetESIPFMDTargets',
			},
			{
				name: 'GetESISAPTargets',
				value: 'GET /DistributionTargets/PTC.ESI.ESISAPTarget',
				description: 'Get the SAP type of Distribution Targets - get /DistributionTargets/PTC.ESI.ESISAPTarget',
				action: 'GetESISAPTargets',
			},
		],
	},
	...ActionAssociateDistributionTarget.description,
	...ActionGetAssignedDistributionTargets.description,
	...ActionPostResultForSubTransaction.description,
	...ActionPostResultForTransaction.description,
	...ActionPostResultForTransactionAndSubTransaction.description,
	...ActionRemoveDistributionTarget.description,
	...DistributionTargetContextGetContainer.description,
	...GetDistributionTarget.description,
	...GetDistributionTargets.description,
	...GetEsiAbstractMesTargets.description,
	...GetEsiEmailTargets.description,
	...GetEsiFileTargets.description,
	...GetEsiftpTargets.description,
	...GetEsimesTargets.description,
	...GetEsioaTargets.description,
	...GetEsipfmdTargets.description,
	...GetEsisapTargets.description,
];
