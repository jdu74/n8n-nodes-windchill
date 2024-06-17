import { INodeProperties } from "n8n-workflow";

export const OperationOperationToWorkCenterLinksDeletePtcMfgProcMgmtOperationToWorkCenterLinkDescription: INodeProperties[] = [
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
					"DELETE /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationToWorkCenterLinkId',
		name: 'OperationToWorkCenterLinkId-string(path)',
		description: 'Operation To Work Center Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /Operations('{OperationId}')/OperationToWorkCenterLinks('{OperationToWorkCenterLinkId}')",
				],
			},
		},
		required: true,
	},
];
