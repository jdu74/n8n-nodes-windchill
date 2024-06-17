import { INodeProperties } from "n8n-workflow";

export const DeleteStandardCcDescription: INodeProperties[] = [
	{
		displayName: 'StandardCCId',
		name: 'StandardCCId-string(path)',
		description: 'Standard Cc ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /StandardCCs('{StandardCCId}')",
				],
			},
		},
		required: true,
	},
];
