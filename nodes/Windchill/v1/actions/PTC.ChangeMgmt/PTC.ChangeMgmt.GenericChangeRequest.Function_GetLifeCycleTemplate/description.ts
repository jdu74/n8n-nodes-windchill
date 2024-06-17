import { INodeProperties } from "n8n-workflow";

export const PtcChangeMgmtGenericChangeRequestFunctionGetLifeCycleTemplateDescription: INodeProperties[] = [
	{
		displayName: 'GenericChangeRequestId',
		name: 'GenericChangeRequestId-string(path)',
		description: 'Generic Change Request ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.ChangeMgmt',
				],
				operation: [
					"GET /GenericChangeRequests('{GenericChangeRequestId}')/PTC.ChangeMgmt.GetLifeCycleTemplate()",
				],
			},
		},
		required: true,
	},
];
