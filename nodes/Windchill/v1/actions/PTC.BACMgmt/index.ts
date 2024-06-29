import * as ActionDeleteBacReceivedDeliveries from './Action_DeleteBACReceivedDeliveries';
import * as ActionExport from './Action_Export';
import * as ActionImportStage1Action from './Action_ImportStage1Action';
import * as ActionImportStage3Action from './Action_ImportStage3Action';
import * as ActionPreview from './Action_Preview';
import * as ActionSaveImportMappings from './Action_SaveImportMappings';
import * as DeleteBacReceivedDelivery from './DeleteBACReceivedDelivery';
import * as FunctionGetImportMappings from './Function_GetImportMappings';
import * as FunctionGetIxPermissions from './Function_GetIXPermissions';
import * as GetBacReceivedDeliveries from './GetBACReceivedDeliveries';
import * as GetBacReceivedDelivery from './GetBACReceivedDelivery';

import { INodeProperties } from 'n8n-workflow';

export {
	ActionDeleteBacReceivedDeliveries,
	ActionExport,
	ActionImportStage1Action,
	ActionImportStage3Action,
	ActionPreview,
	ActionSaveImportMappings,
	DeleteBacReceivedDelivery,
	FunctionGetImportMappings,
	FunctionGetIxPermissions,
	GetBacReceivedDeliveries,
	GetBacReceivedDelivery,
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
					'PTC.BACMgmt',
				],
			},
		},
		default: '/Windchill/servlet/odata/v3/BACMgmt',
	},
		{
		displayName: 'Operation',
		name: 'operation',
		type: 'options',
		noDataExpression: true,
		displayOptions: {
			show: {
				resource: [
					'PTC.BACMgmt',
				],
			},
		},
		default: 'GET /BACReceivedDeliveries',
		options: [
			{
				name: 'Action_DeleteBACReceivedDeliveries',
				value: 'POST /DeleteBACReceivedDeliveries',
				description: 'Execute DeleteBACReceivedDeliveries - post /DeleteBACReceivedDeliveries',
				action: 'Action_DeleteBACReceivedDeliveries',
			},
			{
				name: 'Action_Export',
				value: 'POST /Export',
				description: 'Creates a package of the business administrative data changes that meet the specified criteria. - post /Export',
				action: 'Action_Export',
			},
			{
				name: 'Action_ImportStage1Action',
				value: 'POST /ImportStage1Action',
				description: 'Stage1, Returns Content upload URL with other information required to upload a ZIP package. The url returned here becomes Stage2 - post /ImportStage1Action',
				action: 'Action_ImportStage1Action',
			},
			{
				name: 'Action_ImportStage3Action',
				value: 'POST /ImportStage3Action',
				description: "Stage3, Attaches the content uploaded in stage2 to Site Context's inbox contentholder - post /ImportStage3Action",
				action: 'Action_ImportStage3Action',
			},
			{
				name: 'Action_Preview',
				value: 'POST /Preview',
				description: 'Generates a preview of the business administrative data changes that meet the specified criteria. - post /Preview',
				action: 'Action_Preview',
			},
			{
				name: 'Action_SaveImportMappings',
				value: 'POST /SaveImportMappings',
				description: 'Action to Save BAC RD Import Mappings. - post /SaveImportMappings',
				action: 'Action_SaveImportMappings',
			},
			{
				name: 'DeleteBACReceivedDelivery',
				value: "DELETE /BACReceivedDeliveries('{BACReceivedDeliveryId}')",
				description: "DeleteBACReceivedDelivery - delete /BACReceivedDeliveries('{BACReceivedDeliveryId}')",
				action: 'DeleteBACReceivedDelivery',
			},
			{
				name: 'Function_GetImportMappings',
				value: 'GET /GetImportMappings()',
				description: 'Function to Get BAC RD Import Mappings. - get /GetImportMappings()',
				action: 'Function_GetImportMappings',
			},
			{
				name: 'Function_GetIXPermissions',
				value: 'GET /GetIXPermissions()',
				description: 'Returns the IXPermission object for logged in user that shows permitted actions for the user. - get /GetIXPermissions()',
				action: 'Function_GetIXPermissions',
			},
			{
				name: 'GetBACReceivedDeliveries',
				value: 'GET /BACReceivedDeliveries',
				description: 'Get BACReceivedDeliveries - get /BACReceivedDeliveries',
				action: 'GetBACReceivedDeliveries',
			},
			{
				name: 'GetBACReceivedDelivery',
				value: "GET /BACReceivedDeliveries('{BACReceivedDeliveryId}')",
				description: "Get BACReceivedDelivery for a given BACReceivedDeliveryId - get /BACReceivedDeliveries('{BACReceivedDeliveryId}')",
				action: 'GetBACReceivedDelivery',
			},
		],
	},
	...ActionDeleteBacReceivedDeliveries.description,
	...ActionExport.description,
	...ActionImportStage1Action.description,
	...ActionImportStage3Action.description,
	...ActionPreview.description,
	...ActionSaveImportMappings.description,
	...DeleteBacReceivedDelivery.description,
	...FunctionGetImportMappings.description,
	...FunctionGetIxPermissions.description,
	...GetBacReceivedDeliveries.description,
	...GetBacReceivedDelivery.description,
];
