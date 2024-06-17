import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtOperationFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
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
					"GET /Operations('{OperationId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
