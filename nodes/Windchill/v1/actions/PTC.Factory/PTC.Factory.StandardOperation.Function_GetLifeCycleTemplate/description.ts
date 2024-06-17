import { INodeProperties } from "n8n-workflow";

export const PtcFactoryStandardOperationFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
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
					"GET /StandardOperations('{StandardOperationId}')/PTC.Factory.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
