import { INodeProperties } from "n8n-workflow";

export const OperationHolderOperationHolderUsageLinkDeletePtcMfgProcMgmtOperationHolderUsageLinkDescription: INodeProperties[] = [
	{
		displayName: 'OperationHolderId',
		name: 'OperationHolderId-string(path)',
		description: 'Operation Holder ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'OperationHolderUsageLinkId',
		name: 'OperationHolderUsageLinkId-string(path)',
		description: 'Operation Holder Usage Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.MfgProcMgmt',
				],
				operation: [
					"DELETE /OperationHolders('{OperationHolderId}')/OperationHolderUsageLink('{OperationHolderUsageLinkId}')",
				],
			},
		},
		required: true,
	},
];
