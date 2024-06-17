import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardOperationFunctionGetSopDetailsWithDescription: INodeProperties[] = [
	{
		displayName: 'StandardOperationId',
		name: 'StandardOperationId-string(path)',
		description: 'Standard Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardOperations('{StandardOperationId}')/PTC.Factory.getSOPDetails(NavName='{NavName}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'NavName',
		name: 'NavName-string(path)',
		description: 'Nav Name - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"GET /StandardOperations('{StandardOperationId}')/PTC.Factory.getSOPDetails(NavName='{NavName}')",
				],
			},
		},
		required: true,
	},
];
