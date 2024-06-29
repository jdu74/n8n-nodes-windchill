import { INodeProperties } from "n8n-workflow";

export const PtcWorkflowWorkItemActionCompleteWorkitemWithWorkitemCommentVoteActionAutomateFastTrackVariablesSignatureTokenSubjectNameActivityNameDescription: INodeProperties[] = [
	{
		displayName: 'WorkItemId',
		name: 'WorkItemId-string(path)',
		description: 'Work Item ID - string (path)',
		type: 'string',
		default: '',
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
			},
		},
		required: true,
	},
	{
		displayName: 'AdditionalFields',
		name: 'additionalFields',
		description: 'AdditionalFields - fixedCollection',
		type: 'fixedCollection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			multipleValues: false,
		},
		options: [
			{
				displayName: 'Metadata',
				name: 'metadataValues',
				default: '',
				values: [
					{
						displayName: '$select',
						name: '$select-string(query)',
						description: 'Select - string (query)',
						type: 'string',
						default: '',
					},
					{
						displayName: '$expand',
						name: '$expand-string(query)',
						description: 'Expand - string (query)',
						type: 'string',
						default: '',
					},
				],
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
			},
		},
	},
	{
		displayName: 'JSON Content-Type',
		name: 'jsonContentType',
		type: 'hidden',
		default: 'application/json',
		options: [
			{
				name: 'application/json',
				value: 'application/json',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
			},
		},
	},
	{
		displayName: 'JSON Parameters',
		name: 'jsonParameters',
		description: 'Whether jsonParameters - boolean',
		type: 'boolean',
		default: false,
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
				jsonContentType: [
					'application/json',
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object1-object (body)',
		type: 'collection',
		default: {},
		placeholder: 'Add Field',
		typeOptions: {
			alwaysOpenEditWindow: true,
			multipleValues: false,
		},
		options: [
			{
				displayName: 'ActivityName',
				name: 'ActivityName',
				description: 'Activity Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* AutomateFastTrack',
				name: 'AutomateFastTrack',
				description: 'Whether Automate Fast Track - boolean',
				type: 'boolean',
				default: false,
			},
			{
				displayName: 'SignatureToken',
				name: 'SignatureToken',
				description: 'Signature Token - string',
				type: 'string',
				default: '',
			},
			{
				displayName: 'SubjectName',
				name: 'SubjectName',
				description: 'Subject Name - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* UserEventList',
				name: 'UserEventList',
				description: 'User Event List - array',
				type: 'json',
				default: '[\n\t"string"\n]',
			},
			{
				displayName: '* Variables',
				name: 'Variables',
				description: 'Variables - array',
				type: 'json',
				default: '[\n\t{\n\t\t"Value": "string",\n\t\t"Name": "string",\n\t\t"DisplayName": "string",\n\t\t"TypeName": "string"\n\t}\n]',
			},
			{
				displayName: '* VoteAction',
				name: 'VoteAction',
				description: 'Vote Action - string',
				type: 'string',
				default: '',
			},
			{
				displayName: '* WorkitemComment',
				name: 'WorkitemComment',
				description: 'Workitem Comment - string',
				type: 'string',
				default: '',
			},
		],
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					false,
				],
			},
		},
	},
	{
		displayName: 'Body',
		name: 'object2-json (body)',
		description: 'JsonObject - JSON',
		type: 'json',
		default: '{\n\t"VoteAction": "string",\n\t"SubjectName": "string",\n\t"AutomateFastTrack": true,\n\t"Variables": [\n\t\t{\n\t\t\t"Value": "string",\n\t\t\t"Name": "string",\n\t\t\t"DisplayName": "string",\n\t\t\t"TypeName": "string"\n\t\t}\n\t],\n\t"SignatureToken": "string",\n\t"UserEventList": [\n\t\t"string"\n\t],\n\t"ActivityName": "string",\n\t"WorkitemComment": "string"\n}',
		typeOptions: {
			alwaysOpenEditWindow: true,
		},
		displayOptions: {
			show: {
				resource: [
					'PTC.Workflow',
				],
				operation: [
					"POST /WorkItems('{WorkItemId}')/PTC.Workflow.CompleteWorkitem",
				],
				jsonContentType: [
					'application/json',
				],
				jsonParameters: [
					true,
				],
			},
		},
	},
];
