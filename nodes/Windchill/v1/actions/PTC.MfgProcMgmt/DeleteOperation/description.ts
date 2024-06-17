import { INodeProperties } from "n8n-workflow";

export const DeleteOperationDescription: INodeProperties[] = [
	{
		displayName: 'OperationId',
		name: 'OperationId-string(path)',
		description: 'Operation ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Operations('{OperationId}')",
				],
			},
		},
		required: true,
	},
];
