import { INodeProperties } from "n8n-workflow";

export const PtcMfgProcMgmtWorkCenterFunctionIsCheckoutAllowedDescription: INodeProperties[] = [
	{
		displayName: 'WorkCenterId',
		name: 'WorkCenterId-string(path)',
		description: 'Work Center ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"GET /WorkCenters('{WorkCenterId}')/PTC.MfgProcMgmt.IsCheckoutAllowed()",
				],
			},
		},
		required: true,
	},
];
