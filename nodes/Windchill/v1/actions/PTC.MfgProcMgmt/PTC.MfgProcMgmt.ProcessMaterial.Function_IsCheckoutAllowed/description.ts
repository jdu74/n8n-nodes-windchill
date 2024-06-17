import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtProcessMaterialFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'ProcessMaterialId',
		name: 'ProcessMaterialId-string(path)',
		description: 'Process Material ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /ProcessMaterials('{ProcessMaterialId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
