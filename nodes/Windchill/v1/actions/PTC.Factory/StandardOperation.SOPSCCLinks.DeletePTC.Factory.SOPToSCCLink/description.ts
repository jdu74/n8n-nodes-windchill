import { INodeProperties } from "n8n-workflow";

export const StandardOperationSopsccLinksDeletePtcFactorySopToSccLinkDescription: INodeProperties[] = [
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
					"DELETE /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'SOPToSCCLinkId',
		name: 'SOPToSCCLinkId-string(path)',
		description: 'Sop To Scc Link ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Factory',
				],
				operation: [
					"DELETE /StandardOperations('{StandardOperationId}')/SOPSCCLinks('{SOPToSCCLinkId}')",
				],
			},
		},
		required: true,
	},
];
